import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import format from "date-fns/format";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../components/types/app";
import ListingCard from "../components/ListingCard";
import { list } from "postcss";
import Map from "../components/Map";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};
const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate} | ${numOfGuests} guests`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filters",
  ];

  const searchResultData: SearchResultData = await getSearchResult();
  console.log(SearchResult);

  return (
    <>
      <Header placeholder={`${location} | ${range}`} />
      <main>
        <section className="pt-14">
          <div className="container pb-16">
            <p className="text-lg">300+ Stays - for {numOfGuests} guests</p>
            <h1 className="text-[30px] font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
              {filters.map((filter) => (
                <button type="button" className="filter-btn" key={filter}>
                  {filter}
                </button>
              ))}
            </div>
            <div className="container flex">
              <div className="pr-6">
                {searchResultData.map((listing) => (
                  <ListingCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
              <div className="hidden xl:inline-flex min-w-[600px] rounded-md">
                <Map searchResultData={searchResultData} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
