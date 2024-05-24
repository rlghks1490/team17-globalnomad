import Link from "next/link";

const GuestHeader = () => {
  return (
    <nav className="sticky flex h-20 p-3">
      <div className="flex w-full max-w-[1920px] items-center justify-between">
        <div>
          <Link href="/">
            <img src="/icons/headerLogo.svg" alt="headerLogo.svg" />
          </Link>
        </div>
        <div className=" flex items-center justify-center gap-6 text-gnDarkBlack">
          <button>
            <Link href="/login">로그인</Link>
          </button>
          <button>
            <Link href="/signup">회원가입</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GuestHeader;
