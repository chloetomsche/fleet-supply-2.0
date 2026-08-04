export default function SearchBar() {
  return (
    <form className="flex w-full">
      <input
        placeholder="What can we help you find today?"
        className="w-full text-xs md:text-sm lg:text-base border border-black rounded-l-xs px-2 py-1.5 md:py-2"
      />
      <button className="bg-[#DC2126] w-7 md:w-8 lg:w-10 flex items-center justify-center rounded-r-xs shrink-0">
        <img
          src="/search.png"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        />
      </button>
    </form>
  );
}
