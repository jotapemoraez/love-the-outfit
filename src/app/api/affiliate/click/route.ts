import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { itemId, affiliateLink, lookId, userId } = body;

    // Here you would typically:
    // 1. Log the click to your analytics system
    // 2. Track for affiliate commission
    // 3. Store in database for reporting

    console.log('Affiliate click tracked:', {
      itemId,
      affiliateLink,
      lookId,
      userId,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    });

    // Return the affiliate link for redirect
    return NextResponse.json({
      success: true,
      redirectUrl: affiliateLink,
      message: 'Click tracked successfully'
    });

  } catch (error) {
    console.error('Error tracking affiliate click:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to track click' 
      },
      { status: 500 }
    );
  }
} 