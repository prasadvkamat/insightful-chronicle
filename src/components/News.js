// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [articles, setarticles] = useState([])
//   const [loading, setloading] = useState('false')
//   const [page, setpage] = useState(1)
//   const [totalResults, settotalResults] = useState(0)
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     articles: [],
//   //     loading: false,
//   //     page: 1,
//   //     totalResults: 0,

//   //   };
//   // }
//   const updateNews = async () => {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=business&apiKey=0589749a6f4c4073b951c84db5d2e377&page=${page}&pageSize=${props.pagesize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     props.setProgress(50);
//     let parsedData = await data.json();
//     setarticles(parsedData.articles)
//     settotalResults(parsedData.totalResults)
//     setloading(false)

//     props.setProgress(100);
//   }

//   useEffect(() => {
//     updateNews();
//   }, [])




//    const fetchMoreData = async () => {
//     setpage( page + 1 );
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=business&apiKey=0589749a6f4c4073b951c84db5d2e377&page=${page + 1}&pageSize=${props.pagesize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setarticles(parsedData.articles)
//     settotalResults(parsedData.totalResults)
//     this.setState({
//       articles: articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//     });
//   };


//   return (
//     <>
//       <div>
//         <div className="text-center" style={{ margin: "35px" }}>
//           <h1>&larr;Insights from the {props.title} News &rarr; </h1>
//         </div>
//         {loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={this.fetchMoreData}
//           hasMore={articles.length < totalResults}
//           loader={<Spinner />}
//         >
//           {articles.map((element) => (
//             <div key={element.url}>
//               <NewsItem
//                 title={element.title}
//                 description={element.description}
//                 urlToImage={element.urlToImage}
//                 url={element.url}
//                 author={element.author}
//                 publishedAt={element.publishedAt}
//               />
//             </div>
//           ))}
//         </InfiniteScroll>
//       </div>
//     </>
//   );

// }
// News.defaultProps = {
//   country: "in",
//   pagesize: 10,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pagesize: PropTypes.number,
//   category: PropTypes.string,
// };
// export default News;
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dfc45203522e4eaface6b343a9d16e15&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dfc45203522e4eaface6b343a9d16e15&page=${page + 1}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div>
        <div className="text-center" style={{ margin: "35px" ,marginTop:'90px'}}>
          <h1>&larr; Insights from the {props.title} News &rarr; </h1>
        </div>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          {articles.map((element) => (
            <div key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                urlToImage={element.urlToImage}
                url={element.url}
                author={element.author}
                publishedAt={element.publishedAt}
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 10,
  category: "general",
};

News.propTypes = {
  setProgress: PropTypes.func.isRequired,
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default News;

