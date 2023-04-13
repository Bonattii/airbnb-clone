import Container from './components/Container';
import ClientOnly from './components/ClientOnly';
import EmptyState from './components/EmptyState';
import ListingCard from './components/listings/ListingCard';

import getListings from './actions/getListings';
import getCurrentUser from './actions/getCurrentUser';

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid grid-cols-1 gap-8
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            xl:grid-cols-5 2xl:grid-cols-6
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              data={listing}
              key={listing.id}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
}
