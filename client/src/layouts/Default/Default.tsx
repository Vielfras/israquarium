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
import Fish from '../../pages/Fish/Fish'
import Shops from '../../pages/Shops/Shops'
import Articles from '../../pages/Articles/Articles'
import About from '../../pages/About/About'
import ContactUs from '../../pages/ContactUs/ContactUs'
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy'
import Licensing from '../../pages/Licensing/Licensing'
import SignIn from '../../pages/SignIn/SignIn'

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
          <Route path='/fish' element={<Fish />} />
          <Route path='/plants' element={<Plants />} />
          <Route path='/shops' element={<Shops />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/licensing' element={<Licensing />} />
          <Route path='/signIn' element={<SignIn/>}/>
          {/* 
        <Route path='/mycards' element={<MyOwnCards/>}/>
        <Route path='/liked-cards' element={<LikedCards/>}/>
        <Route path='/create-card' element={<CreateCard/>}/>
        <Route path='/card-details/:cardId' element={<CardDetails/>}/>
        <Route path='/edit-card/:cardId' element={<EditCard/>}/>
        */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}
