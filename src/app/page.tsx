import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from "react";
import fs from "fs";
import csv from "csv-parser";
import Map from './Map';


const inter = Inter({ subsets: ['latin'] })



export default async function Home() {
  const results = [];
  const data = await new Promise((resolve, reject) => {
    
    fs.createReadStream("src/app/sample_data.csv")
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed.");
        resolve(results);
      })
      .on("error", (error) => reject(error));
    });
  console.log(results)
  return (
    <main>
      
      map goes here
      {/* {data.map((row, index) => (<div>{row["Lat"]}</div>))} */}
      <Map data={data.slice(0,200)}/>  
    </main>
  )
}


// export async function getServerSideProps() {
//   const data = [];
//   await new Promise((resolve, reject) => {
//     fs.createReadStream("./sample_data.csv")
//       .pipe(csv())
//       .on("data", (row) => {
//         data.push(row);
//         console.log(">>",row)
//       })
//       .on("end", () => {
//         console.log("CSV file successfully processed.");
//         resolve(data);
//       })
//       .on("error", (error) => {
//         reject(error);
//       });
//   });
//   return {
//     props: {
//       data,
//     },
//   };
// }

