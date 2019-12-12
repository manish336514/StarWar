import React, { useEffect,useState } from 'react'
import axios from 'axios';



export default function SearchPlanet1 (){
    const [data, setData] = useState({ hits: [] });

  console.log("data",data)
    useEffect(async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
       );
        setData(result.data);
      }, []);
    
  
      return (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      );
    }
    
  
  

// export default class SearchPlanet1 extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             planetNumber: 2,
//             data: []
//         };
//     }

//     handleChange = (e) => {
//         this.setState({ planetNumber: e.target.value })

//     }
//     handleClcik = () => {
//         let url = 'https://swapi.co/api/planets/' + this.state.planetNumber;
//         fetch(url)
//             .then(response => response.json())
//             .then(data => this.setState({ data: data })
//             )
//     }
//     render() {
//         console.log("data", this.state.data)
//         return (
//             <>
//                 Search Planet Number
//           <input type="text" value={this.state.planetNumber} onChange={this.handleChange}></input>
//                 <button type="submit" onClick={this.handleClcik}>Submit</button>
//             </>
//         );
//     }
// }