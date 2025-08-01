import { NextRequest, NextResponse } from 'next/server';
import { categories } from '@/data/mockData';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');

  let filteredCategories = [...categories];

  if (type) {
    filteredCategories = filteredCategories.filter(category => category.type === type);
  }

  return NextResponse.json({
    categories: filteredCategories,
    total: filteredCategories.length,
    filters: {
      type
    }
  });
} 