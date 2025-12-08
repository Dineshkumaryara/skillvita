// src/app/blogs/[id]/page.tsx
import BlogPost from '@/components/blogs/BlogPost';
import { use } from 'react';

export default function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <BlogPost id={id} />;
}
