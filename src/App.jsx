import Back from "./Component/Back";
import Front from "./Component/Front";
import PaginationExample from "./Component/Page";

const App = () => {
  return (
    <div>
      <Front />
      {/* <PaginationExample /> */}
      <Back />
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import {
//   PDFDownloadLink,
//   Document,
//   Page,
//   Text,
//   View,
//   Image,
//   StyleSheet,
// } from "@react-pdf/renderer";

// // FrontCover Component
// const FrontCover = ({ onInputChange }) => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [backgroundImage, setBackgroundImage] = useState("");

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setBackgroundImage(reader.result);
//         onInputChange("backgroundImage", reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-100 ">
//       <h1 className="text-3xl font-bold mb-6">Front Cover</h1>
//       <div className="bg-white p-8 rounded-lg shadow-lg  max-w-xl">
//         <input
//           type="text"
//           placeholder="Enter Book Title"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//             onInputChange("title", e.target.value);
//           }}
//           className="block w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
//         />
//         <input
//           type="text"
//           placeholder="Enter Author Name"
//           value={author}
//           onChange={(e) => {
//             setAuthor(e.target.value);
//             onInputChange("author", e.target.value);
//           }}
//           className="block w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
//         />
//         <input type="file" onChange={handleImageUpload} className="mb-4" />
//         {/* {backgroundImage && (
//           <div
//             className="w-full h-60 bg-cover bg-center rounded-md shadow-md"
//             style={{ backgroundImage: `url(${backgroundImage})` }}
//           />
//         )} */}
//       </div>
//     </div>
//   );
// };

// // Book Component
// const Book = ({ onInputChange }) => {
//   const [pages, setPages] = useState([]);

//   const handleAddPage = () => {
//     if (pages.length < 10) {
//       setPages([...pages, { backgroundImage: "", content: "" }]);
//     }
//   };

//   const handlePageInputChange = (index, field, value) => {
//     const updatedPages = [...pages];
//     updatedPages[index][field] = value;
//     setPages(updatedPages);
//     onInputChange("pages", updatedPages);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-100 ">
//       <h1 className="text-3xl font-bold mb-6">Book Pages</h1>
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
//         {pages.map((page, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="file"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   const reader = new FileReader();
//                   reader.onload = () => {
//                     handlePageInputChange(
//                       index,
//                       "backgroundImage",
//                       reader.result
//                     );
//                   };
//                   reader.readAsDataURL(file);
//                 }
//               }}
//               className="mb-2"
//             />
//             <textarea
//               placeholder="Enter Page Content"
//               value={page.content}
//               onChange={(e) =>
//                 handlePageInputChange(index, "content", e.target.value)
//               }
//               className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
//             />
//           </div>
//         ))}
//         <button
//           onClick={handleAddPage}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Add Page
//         </button>
//       </div>
//     </div>
//   );
// };

// const BackCover = ({ onInputChange }) => {
//   const [content, setContent] = useState("");
//   const [backgroundImage, setBackgroundImage] = useState("");

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setBackgroundImage(reader.result);
//         onInputChange("backCoverImage", reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Back Cover</h1>
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
//         <textarea
//           placeholder="Enter Back Cover Content"
//           value={content}
//           onChange={(e) => {
//             setContent(e.target.value);
//             onInputChange("backCoverContent", e.target.value);
//           }}
//           className="block w-full h-60 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-4"
//         />
//         <input type="file" onChange={handleImageUpload} className="mb-4" />
//         {backgroundImage && (
//           <div
//             className="w-full h-60 bg-cover bg-center rounded-md shadow-md"
//             style={{ backgroundImage: `url(${backgroundImage})` }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [bookData, setBookData] = useState({
//     title: "",
//     author: "",
//     backgroundImage: "",
//     pages: [],
//     backCoverContent: "",
//   });

//   const handleInputChange = (field, value) => {
//     setBookData({ ...bookData, [field]: value });
//   };

//   const generatePDF = () => {
//     const doc = (
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <Text style={styles.title}>{bookData.title}</Text>
//             <Text style={styles.author}>By {bookData.author}</Text>
//             <Image src={bookData.backgroundImage} style={styles.image} />
//           </View>
//         </Page>
//         {bookData.pages.map((page, index) => (
//           <Page size="A4" style={styles.page} key={index + 1}>
//             <View style={styles.section}>
//               <Image src={page.backgroundImage} style={styles.image} />
//               <Text style={styles.pageContent}>{page.content}</Text>
//             </View>
//           </Page>
//         ))}
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <Text style={styles.backCoverContent}>
//               {bookData.backCoverContent}
//             </Text>
//           </View>
//         </Page>
//       </Document>
//     );

//     return doc;
//   };

//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "row",
//       backgroundColor: "#E4E4E4",
//       padding: 20,
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//     title: {
//       fontSize: 24,
//       marginBottom: 10,
//     },
//     author: {
//       fontSize: 18,
//       marginBottom: 10,
//     },
//     image: {
//       width: "100%",
//       height: "500px",
//       marginBottom: 10,
//     },
//     pageContent: {
//       fontSize: 14,
//       marginTop: 10,
//     },
//     backCoverContent: {
//       fontSize: 16,
//     },
//   });

//   return (
//     <div>
//       <FrontCover onInputChange={handleInputChange} />
//       <Book onInputChange={handleInputChange} />
//       <BackCover onInputChange={handleInputChange} />
//       <div className="flex justify-center mt-6">
//         <PDFDownloadLink document={generatePDF()} fileName="book.pdf">
//           {({ blob, url, loading, error }) =>
//             loading ? "Loading document..." : "Download PDF"
//           }
//         </PDFDownloadLink>
//       </div>
//     </div>
//   );
// };

// export default App;
