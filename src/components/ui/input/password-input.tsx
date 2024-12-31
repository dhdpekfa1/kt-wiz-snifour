import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-4 flex items-center text-muted-foreground focus:outline-none"
        onClick={togglePassword}
        tabIndex={-1}
      >
        {showPassword ? (
          <Eye className="h-3 md:h-4 lg:h-5 w-auto" />
        ) : (
          <EyeOff className="h-3 md:h-4 lg:h-5 w-auto" />
        )}
      </button>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
