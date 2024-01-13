import {Routes,Route} from 'react-router-dom';

import BookingPage from './BookingPage.js';
import HomePage from './HomePage.js'

function Main(){
    return(
        <main>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>} ></Route>
            <Route path='/booking' element={<BookingPage></BookingPage>}></Route>
        </Routes>
        </main>
    )
}

export default Main