import ReactPaginate from 'react-paginate';
import '../App.css';



function Pagination(props){

    const handlePageClick = (data)=>{
        props.getUsersData(data.selected+1);
        // console.log(data.selected)
        
    }

    const totalPage = props.totalPage;
  
return( <div>
<ReactPaginate 
   previousLabel = {'prev'}
   nextLabel = {'next'}
   breakLabel={'...'}
   pageCount={totalPage}
   marginPagesDisplayed={5}
   pageRangeDisplayed={6}
   onPageChange = {handlePageClick}
   containerClassName={'pagination justify-content-center'}
   pageClassName={'page-item'}
   pageLinkClassName={'page-link'}
   previousClassName={'page-item'}
   previousLinkClassName={'page-link'}
   nextClassName={'page-item'}
   nextLinkClassName={'page-link'}
   breakClassName ={'page-item'}
   breakLinkClassName={'page-link'}
   
 />
    </div>
)
 
}

export default Pagination;