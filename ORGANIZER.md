# Organizer Guide

For Ramzi + technical assistants. Teams don't need to read this.

## Before the Event

### Accounts & Keys
- [ ] Create 6 Claude API keys at [console.anthropic.com](https://console.anthropic.com) — label them Team 1-6
- [ ] Set a $25 spend limit per key
- [ ] Create 6 Supabase projects at [supabase.com](https://supabase.com) (free tier, 2 per account = 3 accounts)
- [ ] For each project, copy the URL and anon key from Settings → API
- [ ] Prepare 6 credential sheets (print or share via WhatsApp):
  ```
  Team [N]
  Claude API Key: sk-ant-...
  Supabase URL: https://xxx.supabase.co
  Supabase Anon Key: eyJ...
  ```

### Environment
- [ ] Ensure venue has stable WiFi that can reach github.com, supabase.com, vercel.com
- [ ] Participants need: laptop with Node.js 18+, npm, git, a code editor
- [ ] Claude Code install: `npm install -g @anthropic-ai/claude-code`
- [ ] GitHub CLI (for forking): `brew install gh` (Mac) or [cli.github.com](https://cli.github.com)
- [ ] Test the full flow yourself: fork, fill PROJECT.md, build one feature, deploy

### WhatsApp Groups
- [ ] Create 6 WhatsApp groups: "Team 1 - Workshop", "Team 2 - Workshop", etc.
- [ ] Add yourself to all 6
- [ ] Add each technical assistant to their 2 groups

## Day-Of Schedule

### Hour 1: Explain + Ideate (60 min)
| Time | What |
|------|------|
| 0:00 | Welcome, form teams of 4, assign to groups |
| 0:10 | What is Claude Code — demo it live (build something small in 2-3 min) |
| 0:25 | Explain the workshop: build MVP + pitch, demo at the end |
| 0:30 | Teams brainstorm their product idea |
| 0:45 | Walk around, help teams scope down — push them to fill in PROJECT.md |
| 0:55 | Scope check: every team should have PROJECT.md filled in |

### Hour 2-3: Build + Ship + Pitch (120 min)
| Time | What teams should be doing | Your job |
|------|---------------------------|----------|
| 1:00 | Getting Started — fork, install, run | Help with setup issues |
| 1:15 | Divide roles: coders start building, marketers start pitch | Make sure every team has split |
| 1:15-2:00 | Auth + core feature | Walk the room every 10 min |
| 2:00-2:30 | Second feature + polish | Push teams to deploy if they haven't |
| 2:30-2:45 | Deploy + final pitch prep | Help with Vercel deploy issues |
| 2:45-3:00 | Demos: each team gets 3-5 minutes | Time keep, hype them up |

## Common Issues & How to Help

**"npm install is failing"**
→ Check Node.js version: `node -v` (needs 18+). Try `rm -rf node_modules && npm install`.

**"The page is blank / white screen"**
→ Check terminal for errors. Usually missing `.env.local` — help them create it.

**"Supabase returns empty data"**
→ Table probably doesn't exist yet. Help them run the SQL in Supabase dashboard.
→ Or RLS is blocking. Check if policies were added.

**"Claude Code is slow / erroring"**
→ Rate limit — wait 30 seconds. Or use `/clear` to reduce context.

**"Build fails before deploy"**
→ Tell them: paste the error into Claude Code and say "fix this build error."

**"Vercel deploy fails"**
→ Run `npm run build` locally first to catch errors. Then `npx vercel --prod`.

**Team is stuck on what to build**
→ Suggest these proven MVPs: expense tracker, task manager, habit tracker, bookmark saver, standup logger, team poll, simple blog.

**Team is building too much**
→ Ask: "What's the ONE thing you'll demo?" Cut everything else.

## After the Event
- [ ] Revoke all 6 API keys in the Anthropic Console
- [ ] Optionally: pause or delete the 6 Supabase projects
- [ ] Share the Vercel URLs in a group message — teams can keep building
