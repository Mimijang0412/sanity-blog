// import sanityClient from '@sanity.client';

// export default sanityClient ({
//   projectId: "8xk09a8e",
//   dataset: "production",
// })

// For Sanity v3 (modern setup)
import { createClient } from '@sanity/client'

export default createClient({
  projectId: '8xk09a8e',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
  })
