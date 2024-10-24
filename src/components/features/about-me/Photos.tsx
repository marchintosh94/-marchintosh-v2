import Img from '../../common/Img'
import clsx from 'clsx'

const Photos = () => {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const images = [
    '/photos/marcobaratto_young.png',
    '/photos/marcobaratto_beach.png',
    '/photos/marcobaratto_workstation.png',
    '/photos/marcobaratto_dogs.png'
  ]

  return (
    <section className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      {images.map((image, imageIndex) => (
        <div
          key={image}
          className={clsx(
            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
            rotations[imageIndex % rotations.length]
          )}
        >
          <Img
            src={image}
            alt="marcobaratto"
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
    </section>
  )
}

export default Photos
