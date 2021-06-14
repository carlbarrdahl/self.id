import { Box } from 'grommet'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Layout from '../../../../components/Layout'
import Navbar from '../../../../components/Navbar'

const AddTwitterAccountScreen = dynamic(
  () => import('../../../../client/components/AddTwitterAccountScreen'),
  { ssr: false }
)

export default function AddTwitterAccountPage() {
  return (
    <Layout>
      <Head>
        <title>Add Twitter account | Self.ID</title>
      </Head>
      <Navbar />
      <Box alignSelf="center" margin="large" pad="medium" width="large">
        <AddTwitterAccountScreen />
      </Box>
    </Layout>
  )
}