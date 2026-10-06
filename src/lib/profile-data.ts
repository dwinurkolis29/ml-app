import { createClient } from "@supabase/supabase-js";
import * as local from "@/data/profile";

export type ProfileData = {
  profile: typeof local.profile;
  experience: typeof local.experience;
  projects: typeof local.projects;
  skills: typeof local.skills;
  education: typeof local.education;
  achievements: typeof local.achievements;
  retrospective: typeof local.retrospective;
  source: "supabase" | "local";
};

const fallback: ProfileData = {
  profile: local.profile,
  experience: local.experience,
  projects: local.projects,
  skills: local.skills,
  education: local.education,
  achievements: local.achievements,
  retrospective: local.retrospective,
  source: "local",
};

export async function getProfileData(): Promise<ProfileData> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return fallback;

  try {
    const db = createClient(url, key, { auth: { persistSession: false } });
    const [profile, experience, projects, skills, education, achievements, retro] =
      await Promise.all([
        db.from("profile").select("*").eq("id", 1).single(),
        db.from("experience").select("*").order("sort_order"),
        db.from("projects").select("*").order("sort_order"),
        db.from("skill_groups").select("*").order("sort_order"),
        db.from("education").select("*").order("sort_order"),
        db.from("achievements").select("*").order("sort_order"),
        db.from("retrospective").select("*").order("sort_order"),
      ]);

    const failed = [profile, experience, projects, skills, education, achievements, retro].find(
      (r) => r.error || !r.data,
    );
    if (failed) return fallback;

    const p = profile.data!;
    return {
      profile: {
        ...local.profile,
        name: p.name,
        role: p.role,
        status: p.status ?? local.profile.status,
        summary: p.summary ?? local.profile.summary,
        location: p.location ?? local.profile.location,
        email: p.email ?? local.profile.email,
        linkedin: p.linkedin ?? local.profile.linkedin,
      },
      experience: experience.data!.map((e) => ({
        company: e.company,
        place: e.place ?? "",
        title: e.title,
        period: e.period ?? "",
        points: e.points ?? [],
      })),
      projects: projects.data!.map((e) => ({
        year: e.year ?? "",
        name: e.name,
        description: e.description ?? "",
        tags: e.tags ?? [],
      })),
      skills: skills.data!.map((e) => ({ group: e.group_name, items: e.items ?? [] })),
      education: education.data!.map((e) => ({
        school: e.school,
        place: e.place ?? "",
        degree: e.degree,
        period: e.period ?? "",
        note: e.note ?? "",
      })),
      achievements: achievements.data!.map((e) => ({ year: e.year ?? "", name: e.name })),
      retrospective: retro.data!.map((e) => ({
        year: e.year,
        title: e.title,
        text: e.body ?? "",
      })),
      source: "supabase",
    };
  } catch {
    return fallback;
  }
}
