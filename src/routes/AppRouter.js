import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { HomePage } from '../pages/HomePage'
import { ProfilePage } from '../pages/ProfilePage'
import { SearchPage } from '../pages/SearchPage'
import { CommunityPage } from '../pages/CommunityPage'
import { CategoriesPage } from '../pages/CategoriesPage'
const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/search/:search" element={<SearchPage />} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}

                <Route path="/profile" element={<PrivateRoutes><ProfilePage /></PrivateRoutes>} />
            </Routes>
        </>
    )
}

export default AppRouter