import './Default.scss'
import '../../pages/Page.scss'

import { Route, Routes } from 'react-router-dom'

// components
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

// pages
import NotFound from '../../pages/NotFound/NotFound'
import Home from '../../pages/Home/Home'
import Plants from '../../pages/Plants/Plants'
import FishIndexes from '../../pages/FishIndexes/FishIndexes'
import Shops from '../../pages/Shops/Shops'
import Articles from '../../pages/Articles/Articles'
import About from '../../pages/About/About'
import ContactUs from '../../pages/ContactUs/ContactUs'
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy'
import SignIn from '../../pages/SignIn/SignIn'
import UserProfile from '../../pages/UserProfile/UserProfile'
import SignUp from '../../pages/SignUp/SignUp'
import CreatePlant from '../../pages/CreatePlant/CreatePlant'
import CreateFish from '../../pages/CreateFish/CreateFish'

// import Free from '../../pages/Free/Free'
// import User from '../../pages/User/User'
// import Business from '../../pages/Business/Business'
// import Admin from '../../pages/Admin/Admin'
// import SignIn from '../../pages/SignIn/SignIn'
// import UserProfile from '../../pages/UserProfile/UserProfile'
// import CardDetails from '../../pages/CardDetails/CardDetails'
// import SignUp from '../../pages/SignUp/SignUp'
// import MyOwnCards from '../../pages/MyOwnCards/MyOwnCards'
// import EditCard from '../../pages/EditCard/EditCard'
// import CreateCard from '../../pages/CreateCard/CreateCard'
// import LikedCards from '../../pages/LikedCards/LikedCards'
// import SearchResults from '../../pages/SearchResults/SearchResults'

export default function Default() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-blue-200 dark:bg-cyan-950 p-6">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fish-index' element={<FishIndexes />} />
          <Route path='/plants' element={<Plants />} />
          <Route path='/shops' element={<Shops />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/user-profile' element={<UserProfile/>}/>
          <Route path='/create-plant' element={<CreatePlant/>}/>
          <Route path='/create-fish' element={<CreateFish/>}/>
          {/* 
        <Route path='/edit-card/:cardId' element={<EditCard/>}/>
        */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}
