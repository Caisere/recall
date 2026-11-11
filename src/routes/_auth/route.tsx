import { createFileRoute, Outlet } from '@tanstack/react-router'
import {
  ArrowUpRight,
  Fingerprint,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <section className="relative hidden min-h-screen overflow-hidden bg-slate-950 px-10 py-10 text-white lg:flex lg:flex-col xl:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_8%,rgba(14,165,233,0.24),transparent_38%),radial-gradient(ellipse_at_90%_90%,rgba(37,99,235,0.22),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-size-[56px_56px]`tailwindcss(suggestCanonicalClasses) mask-[linear-gradient(to_bottom,black,transparent_78%)]" />

        <div className="relative flex items-center gap-3 font-medium tracking-tight">
          <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 shadow-lg shadow-sky-950/30">
            <ShieldCheck className="size-5 text-sky-300" />
          </div>
          <span className="text-lg">Recall</span>
        </div>

        <div className="relative my-auto max-w-xl py-16">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-sky-100">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            YOUR WORKSPACE, SECURED
          </div>
          <h1 className="max-w-lg text-4xl leading-[1.12] font-semibold tracking-tight xl:text-5xl">
            A secure start to your next big thing.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
            Sign in to pick up where you left off, or create an account and
            bring your ideas to life.
          </p>

          <div className="relative mt-12 max-w-md rounded-2xl border border-white/10 bg-white/6 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="absolute -top-5 right-8 flex size-11 items-center justify-center rounded-xl border border-sky-200/20 bg-sky-300/15 text-sky-200 shadow-lg shadow-sky-950/40">
              <Fingerprint className="size-5" />
            </div>
            <div className="flex items-start gap-4 pr-8">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <LockKeyhole className="size-4.5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Your account stays yours
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">
                  Thoughtful security keeps your projects and personal details
                  protected.
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
              <span>Private by design</span>
              <span className="inline-flex items-center gap-1.5 text-sky-200">
                Get started <ArrowUpRight className="size-3.5" />
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Recall</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Secure sign-in
          </span>
        </div>
      </section>
      <main className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
