import clsx from "clsx";

export function Button({ className, ...props }: any) {
  return (
    <button
      className={clsx(
        "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
        "bg-orange-700 font-semibold text-zinc-100 shadow-md",
        className
      )}
      {...props}
    />
  );
}
