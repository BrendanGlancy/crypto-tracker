import SearchBar from '../components/SearchBar';
import CoinsList from '../components/CoinList';
import Layout from '../components/Layout';
import {useState} from 'react';

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = e => {
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Layout>
        <div className="coin_app">
          <div className="coin_search">
            <SearchBar type="text" placeholder="Search"
            onChange={handleChange} />
          </div>
          <CoinsList filteredCoins={allCoins}/>
        </div>
      </Layout>

    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false');

    const filteredCoins = await res.json()

    return {
      props: {
        filteredCoins
      }
    };
};
