'use client'

import { Heading } from '@/components/heading'
import { Music } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'
import { Empty } from '@/components/empty'
import { Loader } from '@/components/Loader'

export default function MusicPage() {
  const router = useRouter()
  const [music, setMusic] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setMusic(undefined)

      const response = await axios.post('/api/music', values)

      setMusic(response.data.audio)
      form.reset()
    } catch (error) {
      // TODO: Open Pro Modal

      console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turn your prompt into music"
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Piano solo"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button className="col-span-12 lg:col-span-2">Generate</Button>
            </form>
          </Form>
        </div>

        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="flex w-full items-center justify-center rounded-lg bg-muted p-8">
              <Loader />
            </div>
          )}
          {!music && !isLoading && <Empty label="No music generated" />}

          {music && (
            <audio controls className="mt-8 w-full">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  )
}
