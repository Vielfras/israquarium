import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { DirectionProvider } from '../../context/ReadingDirectionContext';

// Define types for fetched data
interface IWebsiteStats {
    totalUsers: number;
    totalFish: number;
    totalPlants: number;
    totalShops: number;
}

interface IUser {
    _id: string;
    name: { first: string; middle?: string; last: string };
    email: string;
}

interface IFish {
    id: string;
    latinName: string;
    fishSize: number;
}

interface IPlant {
    id: string;
    latinName: string;
    height: number;
}

interface IShop {
    id: string;
    name: string;
    address: { city: string; country: string };
}

export default function AdminProfile() {
    const { t } = useTranslation();
    const auth = useContext(AuthContext);

    // State definitions
    const [websiteStats, setWebsiteStats] = useState<IWebsiteStats | null>(null);
    const [users, setUsers] = useState<IUser[]>([]);
    const [fish, setFish] = useState<IFish[]>([]);
    const [plants, setPlants] = useState<IPlant[]>([]);
    const [shops, setShops] = useState<IShop[]>([]);

    // Fetch data for admin
    useEffect(() => {
        if (auth?.userDetails?.isAdmin) {
            fetchWebsiteStats();
            fetchUsers();
            fetchFish();
            fetchPlants();
            fetchShops();
        }
    }, [auth]);

    const fetchWebsiteStats = async () => {
        const stats: IWebsiteStats = await fetch('/api/admin/stats').then(res => res.json());
        setWebsiteStats(stats);
    };

    const fetchUsers = async () => {
        const userList: IUser[] = await fetch('/api/admin/users').then(res => res.json());
        setUsers(userList);
    };

    const fetchFish = async () => {
        const fishData: IFish[] = await fetch('/api/admin/fish').then(res => res.json());
        setFish(fishData);
    };

    const fetchPlants = async () => {
        const plantData: IPlant[] = await fetch('/api/admin/plants').then(res => res.json());
        setPlants(plantData);
    };

    const fetchShops = async () => {
        const shopData: IShop[] = await fetch('/api/admin/shops').then(res => res.json());
        setShops(shopData);
    };

    const handleSignOut = async () => {
        if (auth) {
            await auth.signOut();
        }
    };

    // Ensure only admins can access this page
    if (!auth?.userDetails?.isAdmin) {
        return (
            <div className="AdminProfile Page flex justify-center">
                <p>{t('UserProfile.signInRequired')}</p>
                <Link to="/sign-in">{t('UserProfile.signIn')}</Link>
            </div>
        );
    }

    return (
        <div className="AdminProfile Page flex justify-center">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center text-gray-700 dark:text-gray-300 mb-4">
                <h3 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 tracking-wide">
                    {t('AdminProfile.title')}
                </h3>

                <DirectionProvider>
                    {/* Website statistics */}
                    <section className="mb-6">
                        <h4 className="text-2xl font-semibold mb-4">{t('AdminProfile.websiteStats')}</h4>
                        {websiteStats ? (
                            <div>
                                <p>{t('AdminProfile.totalUsers')}: {websiteStats.totalUsers}</p>
                                <p>{t('AdminProfile.totalFish')}: {websiteStats.totalFish}</p>
                                <p>{t('AdminProfile.totalPlants')}: {websiteStats.totalPlants}</p>
                                <p>{t('AdminProfile.totalShops')}: {websiteStats.totalShops}</p>
                            </div>
                        ) : (
                            <p>{t('AdminProfile.loading')}</p>
                        )}
                    </section>

                    {/* Users management */}
                    <section className="mb-6">
                        <h4 className="text-2xl font-semibold mb-4">{t('AdminProfile.users')}</h4>
                        {users.length > 0 ? (
                            <ul>
                                {users.map((user) => (
                                    <li key={user._id}>
                                        {`${user.name.first} ${user.name.middle || ''} ${user.name.last}`} - {user.email}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{t('AdminProfile.noUsers')}</p>
                        )}
                    </section>

                    {/* Fish management */}
                    <section className="mb-6">
                        <h4 className="text-2xl font-semibold mb-4">{t('AdminProfile.fish')}</h4>
                        {fish.length > 0 ? (
                            <ul>
                                {fish.map((f) => (
                                    <li key={f.id}>
                                        {f.latinName} - {f.fishSize} cm
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{t('AdminProfile.noFish')}</p>
                        )}
                    </section>

                    {/* Plants management */}
                    <section className="mb-6">
                        <h4 className="text-2xl font-semibold mb-4">{t('AdminProfile.plants')}</h4>
                        {plants.length > 0 ? (
                            <ul>
                                {plants.map((p) => (
                                    <li key={p.id}>
                                        {p.latinName} - {p.height} cm
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{t('AdminProfile.noPlants')}</p>
                        )}
                    </section>

                    {/* Shops management */}
                    <section className="mb-6">
                        <h4 className="text-2xl font-semibold mb-4">{t('AdminProfile.shops')}</h4>
                        {shops.length > 0 ? (
                            <ul>
                                {shops.map((shop) => (
                                    <li key={shop.id}>
                                        {shop.name} - {shop.address.city}, {shop.address.country}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{t('AdminProfile.noShops')}</p>
                        )}
                    </section>

                    {/* Admin's profile details */}
                    <section className="mb-6">
                        <h4 className="text-2xl font-semibold mb-4">{t('UserProfile.title')}</h4>
                        <div className="py-4">
                            <div className="mb-4 text-lg">
                                <b>{t('UserProfile.email')}:</b> {auth.userDetails.email}
                            </div>
                            <div className="mb-4 text-lg">
                                <b>{t('UserProfile.name')}:</b>
                                {`${auth.userDetails.name.first} ${auth.userDetails.name.middle || ''} ${auth.userDetails.name.last}`}
                            </div>
                            <div className="mb-4 text-lg">
                                <b>{t('UserProfile.phone')}:</b> {auth.userDetails.phone}
                            </div>
                            <div className="flex justify-center mb-6">
                                <img
                                    className="rounded-full border-2 border-gray-300 dark:border-gray-600 w-32 h-32 object-cover"
                                    src={auth.userDetails.image?.src}
                                    alt={auth.userDetails.image?.alt}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Sign out button */}
                    <div>
                        <button
                            type="button"
                            className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
                            onClick={handleSignOut}
                        >
                            {t('UserProfile.signOut')}
                        </button>
                    </div>
                </DirectionProvider>
            </div>
        </div>
    );
}
