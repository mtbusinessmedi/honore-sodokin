import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost";
export type ButtonSize = "md" | "sm";

const base =
  "notch-sm inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap font-display font-bold tracking-tight transition-all duration-200 hover:-translate-y-[3px]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(120deg,var(--color-brand)_0%,var(--color-flame)_55%,#c10e2b_100%)] text-white shadow-[0_14px_40px_-14px_rgba(225,20,51,0.85)] hover:shadow-[0_22px_52px_-14px_rgba(255,46,77,0.9)]",
  ghost:
    "bg-white/5 text-paper shadow-[inset_0_0_0_1px_var(--color-hairline-strong)] hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-[30px] py-[17px] text-[14.5px]",
  sm: "px-[22px] py-[13px] text-[13px]",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  extra = "",
) {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
