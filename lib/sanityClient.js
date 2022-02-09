import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'e240afu9',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: 'production',
  token:
    'skWgVSoWab3D572DG3VisQW8O7ORzneEA7tpkwJ4vRoVyG7A1dlmMN7BoHl6bgccE197cU24g6uE0VDc25JgSwPHbKN98vCk2n07GnxnuJ5Ph3pjJf3Nod2c6W8sziHTJ6WmYdiJ36tTdzP4nQ8PknBegFH9Wbmph5bZF0T4ULhDdR1taAcW',
});
