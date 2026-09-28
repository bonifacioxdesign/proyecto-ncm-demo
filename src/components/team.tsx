import Image from "next/image"

type Member = {
  name: string
  image: string
}

type TeamSectionProps = {
  title?: string
  members: Member[]
}

export default function TeamSection({
  title = "Elenco",
  members,
}: TeamSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl border-t px-4 sm:px-6 lg:px-8">
        <span className="bg-background text-caption -mt-3.5 mx-auto block w-max px-4">
          {title}
        </span>

        <div className="mt-12 md:mt-20">
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, index) => (
              <div key={member.name} className="group overflow-hidden">
                <Image
                  className="h-80 w-full rounded-md object-cover object-top grayscale transition-all duration-500 group-hover:h-[21rem] group-hover:rounded-xl hover:grayscale-0 sm:h-96 sm:group-hover:h-[22.5rem]"
                  src={member.image}
                  alt={member.name}
                  width={826}
                  height={1239}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
                />
                <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">
                      _{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
