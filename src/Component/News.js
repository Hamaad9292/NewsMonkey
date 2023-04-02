import React,{useEffect,useState} from "react";

import Newsitem  from "./Newsitem";
import Spinner  from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
   const [articles,setArticles]=useState([])
   const [loading,setLoading]=useState(true)
   const [page,setPage]=useState(1)
   const [totalResults,setTotalResults]=useState(0)
   document.title = `${props.category}- NewsMonkey`;


    const updateNews= async ()=> {
        // props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=7f19bcf786004775b33148c9fb62f61f&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json()
        // props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // props.setProgress(100)
    }
    useEffect(() =>{
        updateNews();
        /* eslint-disable */
    }, [])
   

    // const handlePrevClick = async () => {
    //    setPage(page-1);
    //    updateNews();
    // }

    // handleNextClick = async () => {
    //     this.setState({page:this.state.page+1});
    //     this.updateNews();
    //         }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=7f19bcf786004775b33148c9fb62f61f&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
      
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
    };
    
        return (
            <>
                <div style={{ color: 'brown', background: 'lightBlue', textAlign: 'center', marginBottom: '20px' }}>
                        <h1 style={{marginBottom:'5px',marginTop:'90px'}}>NewsMonkey - Top {props.category} Headline</h1></div>
                    {loading && <Spinner/>}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                        <div className="row">
                            {articles.map((element) => {

                                return <div className="col-md-4 col-sm-12"  key={element.url}>

                                    <Newsitem
                                        title={element.title}
                                        discrption={element.description}
                                        imageUrl={element.urlToImage} newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            })}

                        </div>
                        </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" type="button" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
                {/* </div> */}
                
            </>
        );
    }

News.defaultProps = {
    country: "pk",
    pageSize: 1,
    category: "science"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News