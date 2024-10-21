import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { API_TAGS } from '@/types/api'

export async function POST(request: NextRequest) {
  const tagsArray = new Set<string>(Object.values(API_TAGS))
  const { tag } = (await request.json()) as { tag: string }
  const bearerToken = request.headers.get('Authorization')
  if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
    return new Response('Unauthorized', { status: 401 })
  }
  const token = bearerToken.replace('Bearer ', '')
  if (token !== process.env.MY_SECRET_TOKEN) {
    return new Response('Forbidden', { status: 403 })
  }
  if (!tagsArray.has(tag)) {
    return new Response('Invalid tag', { status: 400 })
  }

  try {
    revalidateTag(tag)
    return Response.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return new Response('Error', { status: 500 })
  }
}
