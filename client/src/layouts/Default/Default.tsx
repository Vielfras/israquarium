// Default.tsx 

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
import About from '../../pages/About/About'
import ContactUs from '../../pages/ContactUs/ContactUs'
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy'
import SignIn from '../../pages/SignIn/SignIn'
import UserProfile from '../../pages/UserProfile/UserProfile'
import SignUp from '../../pages/SignUp/SignUp'
import CreatePlant from '../../pages/CreatePlant/CreatePlant'
import CreateFish from '../../pages/CreateFish/CreateFish'
import Publications from '../../pages/Publications/Publications'
import AdminProfile from '../../pages/AdminProfile/AdminProfile'
import EditPlant from '../../pages/EditPlant/EditPlant'
import EditUser from '../../pages/EditUser/EditUser'
import ProtectedRoute from '../../components/Access/ProtectedRoute'

export default function Default() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-blue-200 dark:bg-cyan-950 p-6">
        <Routes>
          <Route path='/' element={<Home />} />


          <Route path='/publications' element={<Publications />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />

          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/admin-profile' element={<AdminProfile />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/edit-profile' element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>} />

          <Route path='/shops' element={<Shops />} />
          <Route path='/plants' element={<Plants />} />
          <Route path='/create-plant' element={<CreatePlant />} />
          <Route path="/edit-plant/:plantId" element={
            <ProtectedRoute>
              <EditPlant />
            </ProtectedRoute>} />


          <Route path='/fish-index' element={<FishIndexes />} />
          <Route path='/fish-index/:fishIndexName' element={<FishIndexes />} />
          <Route path='/create-fish' element={<CreateFish />} />


          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}
