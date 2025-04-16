import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import chromium from '@sparticuz/chromium'

export async function POST() {
  try {
    const isDev = process.env.NODE_ENV === 'development'
    const browser = await puppeteer.launch({
      defaultViewport: chromium.defaultViewport,
      executablePath: isDev
        ? process.env.CHROME_PATH
        : await chromium.executablePath(),
      headless: chromium.headless,
      args: [
        ...chromium.args,
        '--hide-scrollbars',
        '--disable-web-security',
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    })
    const page = await browser.newPage()
    await page.goto(`${process.env.FE_BASE_URL}/resume/pdf`, {
      waitUntil: 'networkidle0'
    })

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      scale: 0.58
    })

    await browser.close()

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=generated.pdf'
      }
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.error()
  }
}
