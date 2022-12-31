export async function getServerSideProps() {
  // const url = 'http://localhost:9081/api/meshmodel/components/accurate'
  const url = 'http://localhost:9081/api/meshmodel/components/aad-pod-identity'

  const res = await fetch(url, {
      headers: {
          Accept: "application/json"
      }
  })

  const data = await res.json()
  if (!data) {
      return {
          notFound: true,
      }
  }
  return {
      props: {
          data
      }
  }
}

export default function Home({ data }) {
  // console.log(data[1].schema)
  // console.log(data[1].metadata.SVG_Color)

  const jsonSVG = {
    __html: (data[1].metadata.SVG_Color)
  }

  return (
    <>
    <div>
      <div dangerouslySetInnerHTML={jsonSVG} />
    </div>
    </>
  )
}