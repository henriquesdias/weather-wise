type SkeletonLoadingProps = {
  isLoading: boolean;
  children: React.ReactNode;
  className: string;
};

export default function SkeletonLoading({
  isLoading,
  children,
  className,
}: SkeletonLoadingProps) {
  return (
    <div className={`${isLoading ? className : ""}`}>
      {isLoading ? <></> : children}
    </div>
  );
}
