const LoginHeaderDropdownSkeleton = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="skeleton flex h-8 w-8 items-center justify-center rounded-full"></div>
      <div className="skeleton flex h-5 w-12 items-center justify-center rounded-md"></div>
    </div>
  );
};

export default LoginHeaderDropdownSkeleton;
