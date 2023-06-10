import HomePage from "@/components/Home";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}
export default function Home({searchParams}:any) {
  return <HomePage />;
}
