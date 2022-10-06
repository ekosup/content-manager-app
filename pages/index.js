import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import ResourceList from "components/ResourceList";

function Home({resources}) {
  return (
    <Layout>
      <ResourceHighlight 
        resources={resources.slice(0, 2)}
      />
      <Newsletter />
      <ResourceList 
        resources={resources.slice(2)}
      />
      <Footer />
    </Layout>
  )
}

// this function will be called everytime we visit the page
// function is executed on the server
// data is alaways fresh
// this code is executed in the server
export async function getServerSideProps() {

  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}


// is called at the build time, and its called only once
// export async function getStaticProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();
//   return {
//     props: {
//       resources: data
//     }
//   }
// }

export default Home;