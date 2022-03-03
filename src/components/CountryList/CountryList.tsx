import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import TablePagination from '@material-ui/core/TablePagination'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import _ from 'lodash'



import {fetchAllCountries, addCountryToCart} from '../../redux/actions'

import {AppState} from '../../types'

import CountryCard from '../CountryCard/CountryCard'

import './countrylist.scss'



//table pagination action component 


const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }),
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}


// Country list with pagination and sorting 
const CountryList=()=> {

    //get all countries from redux state
    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    const isLoading= useSelector((state:AppState)=>state.countryReducer.isLoading)
    //cart state
    const cart= useSelector((state:AppState)=>state.cartReducer.cart)

    // for filtered countries
    const [filteredCountries, setFilteredCountries]=React.useState(countries)
    //for paginated 
    const [paginatedCountries, setPaginatedCountries]=React.useState(countries)

    React.useEffect(()=>{
        setFilteredCountries(countries)
    },[countries])


    //filter country by keyword
    const searchKeyword=useSelector((state:AppState)=>state.uiReducer.searchKeyWord)
    React.useEffect(()=>{
        
        const _tempCountries:[]=countries.filter((country)=>country.name.toLowerCase().includes(searchKeyword?.toLowerCase()))as []
        setFilteredCountries(_tempCountries)
    },[searchKeyword, countries])

   
    //Sorting related
    const [sortBy, setSortBy]=React.useState('name')


    React.useEffect(()=>{
        const tempSorted=_.orderBy(filteredCountries, [sortBy], ['asc'])  as []
        setPaginatedCountries(tempSorted)       
    },[sortBy, filteredCountries])

   
    //handle sort
    const handleSort=(event:any)=>{        
        //set sort type
        setSortBy(event.target.value) 
        
     }
    
   
    

     //initialize dispatch
     const dispatch=useDispatch()


     //dispatch fetchAllCountries when page loads
     React.useEffect(()=>{
         dispatch(fetchAllCountries())
     },[dispatch])
 

     //pagination related
     const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredCountries.length - page * rowsPerPage);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    //updating data according to pagination
    React.useEffect(()=>{

       const paginedC=filteredCountries.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage) as []
       setPaginatedCountries(paginedC)

    },[page, rowsPerPage, filteredCountries])

    return (
        <div className="country-list">
            {/* sorting  */}
            <div className="country-list__sort">
               <p>Sort by</p>
            <Select  
            labelId="sort-country-select-label"
            id="sort-country-select"              
                onChange={handleSort}
                disableUnderline={true} 
                defaultValue="name"
            >           
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="region">Region</MenuItem>
            <MenuItem value="population">Population</MenuItem>
        </Select>

            </div>

            {/* country lists */}
            <div className="country-list__cards">

                {isLoading && <h2>Loading...</h2>}

                {!isLoading && paginatedCountries && 
                paginatedCountries.map((country)=>(                    
                    <CountryCard key={country.name} {...country} onClick={()=>dispatch(addCountryToCart(country))} disabled={cart.includes(country)}  />
                ))
                }
               
                
            </div>

            {/* pagination */}
            <div className="country-list__pagination">

            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={filteredCountries.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />

            </div>
         

        </div>
    )
}

export default CountryList
