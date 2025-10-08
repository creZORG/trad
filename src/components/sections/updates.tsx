"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { addDocumentNonBlocking, useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";

const announcements = [
  {
    title: "Whitepaper v1.0 Released",
    date: "Coming Soon",
    description: "Our comprehensive whitepaper is now available for download.",
  },
  {
    title: "Partnership with Luna Industries",
    date: "Recently",
    description: "We are excited to announce our strategic partnership to accelerate development.",
  },
  {
    title: "Project TradCoin Announcement",
    date: "Recently",
    description: "The beginning of a new era in digital finance starts now.",
  },
];

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function UpdatesSection() {
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    if (!firestore) return;
    try {
      const subscribersCollection = collection(firestore, "subscribers");
      await addDocumentNonBlocking(subscribersCollection, {
        email: values.email,
        subscriptionDate: new Date().toISOString(),
      });

      toast({
        title: "Subscribed!",
        description: "You've been added to our mailing list.",
      });
      form.reset();
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your subscription. Please try again.",
      });
    }
  }

  return (
    <section id="updates" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Updates & News
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Stay informed on our latest developments and announcements.
            </p>
            <div className="mt-8 space-y-8">
              {announcements.map((item, index) => (
                <div key={item.title}>
                  <div className="relative">
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    <h3 className="mt-2 font-headline text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                  {index < announcements.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Subscribe to our Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Get the latest news and updates delivered to your inbox.</p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
