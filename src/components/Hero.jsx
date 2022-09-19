import { useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import Link from 'next/link'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import Pop from '@/images/pop.svg'
import Swirl from '@/images/swirl.svg'
import Message from '@/images/message.svg'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef()
  let pathRef = useRef()
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points = []

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width
    let y =
      paddingY +
      (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#13B5C8" />
          <stop offset="100%" stopColor="#13B5C8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#06b6d4', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#06b6d4"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#06b6d4"
          />
        </>
      )}
    </svg>
  )
}

function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(null)
  let activePriceIndex = activePointIndex ?? prices.length - 1
  let activeValue = prices[activePriceIndex]
  let previousValue = prices[activePriceIndex - 1]
  let percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <div className="text-xs leading-6 text-gray-500">
              Tailwind Labs, Inc.
            </div>
            <div className="text-sm text-gray-900">$CSS</div>
            <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">
              <path
                d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                stroke="#171717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-3 border-t border-gray-200 pt-5">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl tabular-nums tracking-tight text-gray-900">
                {activeValue.toFixed(2)}
              </div>
              <div className="text-sm text-gray-900">USD</div>
              {percentageChange && (
                <div
                  className={clsx(
                    'ml-auto text-sm tabular-nums tracking-tight',
                    percentageChange >= 0 ? 'text-cyan-500' : 'text-gray-500'
                  )}
                >
                  {`${
                    percentageChange >= 0 ? '+' : ''
                  }${percentageChange.toFixed(2)}%`}
                </div>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-xs text-gray-500">
              <div>1D</div>
              <div>5D</div>
              <div className="font-semibold text-cyan-600">1M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>5Y</div>
            </div>
            <div className="mt-3 rounded-lg bg-gray-50 ring-1 ring-inset ring-black/5">
              <Chart
                width={286}
                height={208}
                paddingX={16}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="mt-4 rounded-lg bg-cyan-500 py-2 px-4 text-center text-sm font-semibold text-white">
              Trade
            </div>
            <div className="mt-3 divide-y divide-gray-100 text-sm">
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Open</div>
                <div className="font-medium text-gray-900">6,387.55</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Closed</div>
                <div className="font-medium text-gray-900">6,487.09</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Low</div>
                <div className="font-medium text-gray-900">6,322.01</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden pt-8 md:pt-16 pb-20 items-center">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-2">
          <motion.div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6 md:mt-20 text-center md:text-left" 
          initial={{ opacity: 0, y: '25px' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900">
            The <span className="underlined-two relative italic">fastest</span> way to become a notary.
            </h1>
            <p className="mt-6 text-lg text-gray-600 lg:pr-24">
              With our easy online course, you’re <span className="font-bold text-gray-700 italic">guaranteed</span> to pass in the fastest time that is allowed by law.
            </p>
            <div className="mt-8 w-auto inline-grid gap-4">
              <Link href="/start" className="border-4 border-black rounded-full px-8 py-3 text-lg text-primary font-semibold bg-white hover:bg-yellow-400 duration-300 inline-flex">
                Only $29 <span className="px-2 opacity-20">|</span> Start Your Course
              </Link>
              <div className="block text-center">
                <span className="text-sm text-gray-600 font-medium">Over 5,000+ Satisfied Customers</span>
                <div className="flex gap-1 text-yellow-400 justify-center mt-2">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
  
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative lg:col-span-5 lg:row-span-2 mt-12 lg:mt-0 xl:col-span-6 justify-center flex">
            <img src="https://images.unsplash.com/photo-1600275668999-f423597ec2a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="hero-image w-3/4 object-cover rounded-tl-full rounded-tr-full border-8 border-black" />
            <div className="absolute left-20 top-8">
              <Image className="w-12" src={Pop} />
            </div>
            <div className="absolute left-12 -bottom-16">
              <Image className="w-48" src={Swirl} />
            </div>
            <div className="absolute right-0 left-0 md:left-auto md:-right-12 bottom-10 md:bottom-20">
              <motion.div className="message bg-white bg-opacity-80 rounded-lg py-4 pl-4 pr-7 shadow-md backdrop-blur-md"
              initial={{ opacity: 0, y: '25px' }}
              animate={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.5, delay: 0.15 }}>
                <div className="flex gap-3 items-center">
                  <div>
                    <div className="bg-yellow-400 rounded-full w-16 h-16 border-2 border-white shadow text-white flex justify-center items-center inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-lg tracking-tight -mb-1 font-semibold text-gray-900 block">Congratulations!</span>
                    <span className="text-sm text-gray-700">You completed your online course.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
