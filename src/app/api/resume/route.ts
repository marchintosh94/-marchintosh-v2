import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function POST() {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
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
