export async function getServerSideProps() {
    console.log("getservverside props called")
    const message = "hello ya"
    return {
      props: {message} // will be passed to the page component as props
    }
  }