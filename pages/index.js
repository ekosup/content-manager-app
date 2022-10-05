import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import ResourceList from "components/ResourceList";
import resources from "api/data";

function Home() {
  return (
    <Layout>
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      {JSON.stringify(resources)}
      <Footer />
    </Layout>
  )
}

export default Home;