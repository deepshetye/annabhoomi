import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function CartSheet({ children }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className={"border-b pb-2"}>
          <SheetTitle>
            <div className="text-2xl">Cart</div>
          </SheetTitle>
        </SheetHeader>

        <div className="py-8 text-center">
          <div className="font-medium text-lg">Your Cart is empty!</div>
          <div className="mt-1 text-slate-600">
            It looks like you haven't added any items to your cart yet.
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
