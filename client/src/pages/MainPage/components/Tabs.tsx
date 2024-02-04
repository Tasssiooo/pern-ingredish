import {
  Tabs as TabsWrapper,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import CardsList from "./Tabs/CardsList";

export default function Tabs() {
  return (
    <section className="container py-8">
      <header className="text-center pt-2 pb-7">
        <h2 className="border-none">Try out some dishes!</h2>
      </header>
      <TabsWrapper
        defaultValue="dishes-of-the-day"
        className="flex flex-col items-center gap-4 w-full"
      >
        <TabsList className="h-max *:min-w-max *:w-full *:h-10 p-3 space-x-7">
          <TabsTrigger value="dishes-of-the-day">Dishes of the day</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="cuisines">Cuisines</TabsTrigger>
        </TabsList>
        <TabsContent value="dishes-of-the-day">
          <CardsList />
        </TabsContent>
        <TabsContent value="popular">
          <CardsList />
        </TabsContent>
        <TabsContent value="cuisines">
          <CardsList />
        </TabsContent>
      </TabsWrapper>
    </section>
  );
}
