import React, {useState} from "react"
import { PageProps, graphql } from "gatsby"
// import { list, listItem} from '../styles/index.css';

type DataType = {
//   allPerson: {
//     nodes: {
//       name: string
//       first_name: string
//       last_name: string
//     }[]
//   }
}
// const IndexPage = ({ data: { allPerson }}: PageProps<DataType>) => (
const HomePage = ({ data }: PageProps<DataType>) => (
  <main>
    <p>hello</p>
    {/* <h1>{subheading}</h1> */}
    {/* <ul className={list}>
      {allPerson.nodes.map(person => (
        <li className={listItem} key={person.name}>{person.first_name} {person.last_name}</li>
      ))}
    </ul> */}
  </main>
)

// export const query = graphql`
//   query {
//     allPerson {
//       nodes {
//         name
//         first_name
//         last_name
//       }
//     }
//   }
// `

export default HomePage
