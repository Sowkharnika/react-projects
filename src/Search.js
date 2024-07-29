function Search({searchItem,setSearch}){
    console.log("search form called");
    return (
   
      <form className="searchform" onSubmit={(e)=>e.preventDefault()} >
       
<input type="text" placeholder="search task"  className="search" value={searchItem} onChange={(e)=>setSearch(e.target.value)}></input>

    </form>
    );
}
export default Search;