import { describe, it, expect } from "vitest";
import { getQuestions, shuffleArray } from "./questions";

describe("getQuestions", () => {
  it("returns starters questions", () => {
    const qs = getQuestions("starters");
    expect(qs.length).toBeGreaterThanOrEqual(5);
    expect(qs[0]).toHaveProperty("id");
    expect(qs[0]).toHaveProperty("question");
    expect(qs[0]).toHaveProperty("options");
    expect(qs[0]).toHaveProperty("answer");
  });

  it("returns movers questions", () => {
    expect(getQuestions("movers").length).toBeGreaterThanOrEqual(5);
  });

  it("returns flyers questions", () => {
    expect(getQuestions("flyers").length).toBeGreaterThanOrEqual(5);
  });

  it("returns KET questions", () => {
    expect(getQuestions("ket-1").length).toBeGreaterThanOrEqual(5);
  });

  it("returns PET questions", () => {
    expect(getQuestions("pet-1").length).toBeGreaterThanOrEqual(5);
  });

  it("returns empty array for unknown exam", () => {
    expect(getQuestions("unknown")).toEqual([]);
  });
});

describe("shuffleArray", () => {
  it("returns same length", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffleArray(arr)).toHaveLength(5);
  });

  it("contains all original elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it("does not mutate original", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    shuffleArray(arr);
    expect(arr).toEqual(copy);
  });
});
