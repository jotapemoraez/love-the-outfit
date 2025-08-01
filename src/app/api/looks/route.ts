import { NextRequest, NextResponse } from 'next/server';
import { mockLooks } from '@/data/mockData';
import { Aesthetic, Occasion, Gender, Season } from '@/types';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const aesthetic = searchParams.get('aesthetic') as Aesthetic | null;
  const occasion = searchParams.get('occasion') as Occasion | null;
  const gender = searchParams.get('gender') as Gender | null;
  const season = searchParams.get('season') as Season | null;
  const featured = searchParams.get('featured') === 'true';

  let filteredLooks = [...mockLooks];

  // Apply filters
  if (aesthetic) {
    filteredLooks = filteredLooks.filter(look => look.aesthetic === aesthetic);
  }
  
  if (occasion) {
    filteredLooks = filteredLooks.filter(look => look.occasion === occasion);
  }
  
  if (gender) {
    filteredLooks = filteredLooks.filter(look => look.gender === gender);
  }
  
  if (season) {
    filteredLooks = filteredLooks.filter(look => look.season === season);
  }

  if (featured) {
    filteredLooks = filteredLooks.filter(look => look.featured === true);
  }

  return NextResponse.json({
    looks: filteredLooks,
    total: filteredLooks.length,
    filters: {
      aesthetic,
      occasion,
      gender,
      season,
      featured
    }
  });
} 