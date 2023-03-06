import Page from '../../components/Page'

const COUNTRIES = ['usa', 'china', 'england']

export default function Country(props) {
  return <Page title='Index Page' linkTo='/other' links={COUNTRIES.filter((c) => c !== props.initialState.country)} />
}

export async function getStaticProps(context) {
  const params = context.params
  const country = params?.country

  return {
    props: {
      initialState: { country }
    }
  }
}

export async function getStaticPaths() {
  const paths = COUNTRIES.map((country) => {
    return { params: { country } }
  })

  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}
