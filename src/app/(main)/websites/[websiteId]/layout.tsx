import { Metadata } from 'next';
import WebsiteProvider from './WebsiteProvider';

export default async function ({
  children,
  params,
}: {
  children: any;
  params: { websiteId: string };
}) {
  const { websiteId } = await params;

  return <WebsiteProvider websiteId={websiteId}>{children}</WebsiteProvider>;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Reno Analytics',
    default: 'Websites | Reno Analytics',
  },
};
